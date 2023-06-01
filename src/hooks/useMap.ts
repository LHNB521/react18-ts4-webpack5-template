import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import { XYZ } from 'ol/source'
import { defaults as defaultControls } from 'ol/control'
import { useEffect, useRef } from 'react'
import mapUrls from '@/components/MapIndex/mapUrls'

export const useMap = () => {
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
  const mapRef = useRef<HTMLDivElement>(null) as any
  useEffect(() => {
    const map: any = new Map({
      target: mapRef.current,
      layers: [vecLayer, imgLayer, labelLayer],
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
    return () => {
      map.setTarget(null)
    }
  }, [])
  return [mapRef]
}
