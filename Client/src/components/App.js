import TdList from "./tilDone/TdList";
import {connect} from 'react-redux'

function App(props) {
  const {lists} = props
  return (
    <div className="App">
    <div style={style.listContainer}>
     {lists.map(list => <TdList title={list.title} cards={list.cards} />)}
     </div>
    </div>
  );
}

const style = {
  "listContainer" : {
    "display": "flex",
    "flexDirection": "row"
  }
}
const mapStateToProps = state => (
  {lists: state.lists}
)

export default connect(mapStateToProps)(App);
