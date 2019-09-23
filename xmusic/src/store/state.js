import {palyMode} from '../common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  mode: palyMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {}
}
export default state
