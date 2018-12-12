import mapStyle from '../common/mapStyle';
import contentView from './contentView';
class Main {
	constructor() {
		let bmap = this.createBMap('mapView');
		contentView.addToDOM(bmap.getContainer().querySelector('.BMap_mask'));
        window.addEventListener('resize', () => {
            contentView.fitContent(true, 0);
        })
	}
	createBMap(id) {
    	let dom = document.createElement('div');
        dom.id = id;
        document.body.appendChild(dom);

        let bmap = new BMap.Map(dom, {enableMapClick:false});
        bmap.centerAndZoom("银川",15);
        bmap.setMapStyle({styleJson:mapStyle});
        bmap.enableScrollWheelZoom();
        return bmap;
    }
}
export default new Main();