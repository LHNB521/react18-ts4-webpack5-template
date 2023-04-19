import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { XYZ } from 'ol/source'
import { defaults as defaultControls } from 'ol/control'
import { Button } from 'antd'
import { createRef, useEffect, useRef, useState } from 'react'
import mapUrls from './mapUrls'
import scssStyles from './index.scss'

const MapIndex: React.FC = () => {
  // 地图容器
  const mapDom: any = createRef<HTMLDivElement>()
  const [baseLayers, setBaseLayers] = useState<any>([])

  useEffect(() => {
    createdBaseLayer()
    initMap()
  }, [])

  let map: any = null
  const initMap = () => {
    console.log(baseLayers)
    map = new Map({
      target: mapDom.current,
      layers: baseLayers,
      controls: defaultControls({
        zoom: false, // 不显示放大放小按钮；
        rotate: false, // 不显示指北针控件；
        attribution: false // 不显示右下角的地图信息控件；
      }).extend([]),
      view: new View({
        projection: 'EPSG:4326',
        center: [120.5, 29.42],
        zoom: 9,
        maxZoom: 18,
        minZoom: 6
      })
    })
  }
  const createdBaseLayer = () => {
    const vecLayer = new TileLayer({
      source: new XYZ({
        url: mapUrls['tian-vec']
      })
    })
    const imgLayer = new TileLayer({
      source: new XYZ({
        url: mapUrls['tian-img']
      })
    })

    const labelLayer = new TileLayer({
      source: new XYZ({
        url: mapUrls['tian-roadLabel']
      })
    })
    setBaseLayers([vecLayer, imgLayer, labelLayer])
  }
  return (
    <div id='map' ref={mapDom} className={scssStyles.mapBox}>
      {/* <Button>切换底图</Button> */}
    </div>
  )
}
export default MapIndex
