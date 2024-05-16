import scssStyle from './index.scss'
function MyLoading() {
  return (
    <div className={scssStyle['intersecting-circles-spinner']}>
      <div className={scssStyle.spinnerBlock}>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
        <span className={scssStyle.circle}></span>
      </div>
    </div>
  )
}
export default MyLoading
