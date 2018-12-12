var columns = ht.Default.parse(comp.getValue('columns')),
	dataSource = ht.Default.parse(comp.getValue('dataSource')),
	thBackground = comp.getValue('thBackground'),
	tdBackground = comp.getValue('tdBackground'),
	thHeight = comp.getValue('thHeight'),
	tdHeight = comp.getValue('tdHeight'),
	thColor = comp.getValue('thColor'),
	tdColor = comp.getValue('tdColor'),
	thFontSize = comp.getValue('thFontSize'),
	tdFontSize = comp.getValue('tdFontSize'),
	thFontFamily = comp.getValue('thFontFamily'),
	tdFontFamily = comp.getValue('tdFontFamily'),
	borderWidth = comp.getValue('borderWidth'),
	borderColor = comp.getValue('borderColor'),
	columnLineColor = comp.getValue('columnLineColor'),
	columnLineWidth = comp.getValue('columnLineWidth'),
	rowLineColor = comp.getValue('rowLineColor'),
	rowLineWidth = comp.getValue('rowLineWidth'),
	showHeadRowLine = comp.getValue('showHeadRowLine'),
	cellPadding = comp.getValue('cellPadding'),
	showHead = comp.getValue('showHead'),
	hoverColor = comp.getValue('hoverColor'),
	translateY = comp.getValue('translateY') || 0;

var width = rect.width,
	height = rect.height,
	x = rect.x,
	y = rect.y;

if (!columns || columns.length === 0) {
	return;
}

var mathMax = Math.max,
	columnCount = columns.length,
	rowCount = dataSource.length;

var calculateColumnsWidth = function (columns){

	var contentWidth = width - borderWidth * 2 - columnLineWidth * (columnCount - 1),
		widths = [],
		rc = 0, ac = 0,
		col, colWidth;
	for (var i = 0, size = columns.length; i < size; i++) {
		col = columns[i];
		colWidth = col.width || 0.1;
		if (isNaN(colWidth)) {
			var values = colWidth.split('\+'),
				value = parseFloat(values[0]),
				cl = [];
            if (value > 1) {
                ac += value;
                cl.push(value);
            }
            else {
                rc += value;
                cl.push(value);
            }
            value = parseFloat(values[1]);
            if (value > 1) {
                ac += value;
                cl.unshift(value);
            }
            else {
                rc += value;
                cl.push(value);
            }
            widths.push(cl);

		} else {
			colWidth = parseFloat(colWidth);
			if (colWidth >= 1) {
				colWidth = mathMax(12, colWidth);
				ac += colWidth;
			}
			else {
				rc += colWidth;
			}
			widths.push(colWidth);
		}
	}
	for (var i = 0, size = widths.length; i < size; i++) {
		colWidth = widths[i];
		if (colWidth < 1) {
			widths[i] = Math.max(0, (colWidth / (rc)) * (contentWidth - ac));
		} else if (colWidth instanceof Array) {
			widths[i] = colWidth[0] + Math.max(0, (colWidth[1] / (rc)) * (contentWidth - ac));
		}
	}
	return widths;
}

var colWidths = calculateColumnsWidth(columns);
// draw background
if (thBackground && showHead) {
	g.save();
	g.fillStyle = thBackground;
	g.fillRect(x, y + borderWidth, width , thHeight);
	g.restore();
}
if (tdBackground) {
	g.save();
	g.fillStyle = tdBackground;
	g.fillRect(
		x,
		y + thHeight * showHead + borderWidth,
		width ,
		height - thHeight * showHead - borderWidth * 2);
	g.restore();
}

// draw column lines
if (columnLineWidth) {
	var offsetX = borderWidth;
    g.beginPath();
    for (var i = 0; i < columnCount - 1 ; i++) {
    	offsetX += colWidths[i] + columnLineWidth * 0.5;
        g.moveTo(offsetX, y);
        g.lineTo(offsetX, y + height);
        offsetX += columnLineWidth * 0.5;
    }
    g.strokeStyle = columnLineColor;
    g.lineWidth = columnLineWidth;
    g.stroke();
}

// draw row lines
if (rowLineWidth) {
	var offsetY = borderWidth + thHeight * showHead + translateY;
    g.beginPath();
    // draw table head bottom line
    if (showHeadRowLine && showHead) {
    	offsetY += rowLineWidth * 0.5;
	    g.moveTo(x, offsetY);
    	g.lineTo(x + width, offsetY);
    	offsetY += rowLineWidth * 0.5;
    }
    for (var i = 0; i < dataSource.length ; i++) {
    	offsetY += tdHeight + rowLineWidth * 0.5;
    	g.moveTo(x, offsetY);
	    g.lineTo(x + width, offsetY);
	    offsetY += rowLineWidth * 0.5;
    }
    g.strokeStyle = rowLineColor;
    g.lineWidth = rowLineWidth;
    g.stroke();
}

// draw table head
var fx = x + borderWidth,
	thFont = thFontSize + 'px ' + thFontFamily;
if (showHead) {
	for (var i = 0; i < columnCount; i++) {
		var columnDef = columns[i],
			columnWidth = colWidths[i] - 2 * cellPadding,
			color = columnDef.headColor || columnDef.color || thColor;
		fx += cellPadding;
		g.save();
		g.beginPath();
		g.rect(fx, y + borderWidth + translateY, columnWidth, thHeight);
		g.clip();
		ht.Default.drawText(g, columnDef.displayName, thFont, color, fx, y + borderWidth + translateY, columnWidth, thHeight, columnDef.align || 'left', 'middle');
		g.restore();
		fx += columnWidth + columnLineWidth + cellPadding;
	}
}

// draw table body
if (dataSource && dataSource.length > 0) {

	var tdFont = tdFontSize + 'px ' + tdFontFamily;
	dataSource.forEach(function(ds, dataIndex){
		var fy = dataIndex * tdHeight + rowLineWidth * (dataIndex + showHeadRowLine * showHead * 1) + thHeight * showHead + borderWidth + translateY;
		fx = x + borderWidth;
		if (fy > y + height) {
			return;
		}
		if (data && data.a('table.hover.index') === dataIndex && hoverColor) {
			g.save();
			g.fillStyle = hoverColor;
			g.fillRect(x, fy, width, tdHeight);
			g.restore();
			
		}
		for (var i = 0; i < columnCount; i++) {
			var columnWidth = colWidths[i] - 2 * cellPadding,
			color = columns[i].bodyColor || columns[i].color || tdColor;;
			fx += cellPadding;
			var val = ds[columns[i].key];
			if (columns[i].drawBackground) {
				var bg = columns[i].drawBackground(val);
				var radius = (tdHeight - 6) / 2;
				g.save();
				g.fillStyle = bg;
				g.beginPath();
				ht.Default.drawRoundRect(g, fx - cellPadding, fy + 3, columnWidth + 2 * cellPadding, tdHeight - 6, radius);
				g.closePath();
				g.fill();
				g.restore();
			}
			g.save()
			g.beginPath();
			g.rect(fx, fy, columnWidth, tdHeight);
			g.clip();
			if (columns[i].isIcon) {
				if (columnWidth > 0) {
					ht.Default.drawStretchImage(g, ht.Default.getImage(ds[columns[i].key]),
						'centerUniform', fx, fy + 1, columnWidth, tdHeight - 2);
				}
			} else {
				
				if (columns[i].format) {
					val = columns[i].format(val);
				}
				ht.Default.drawText(g, val, tdFont, color, fx, fy, columnWidth, tdHeight, columns[i].align || 'left', 'middle');
			}
			g.restore();
			fx += columnWidth + columnLineWidth + cellPadding;
		}
	});
}

// draw border
if (borderWidth) {
    ht.Default.drawBorder(g, borderColor, x, y, width, height, borderWidth);
}