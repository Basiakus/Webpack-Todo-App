
export default Todo;

const Todo = props => <li />
TodoList.propsTypes = {
 	list: PropTypes.object.isRequired,
 	action: PropTypes.func.isRequired,
 	text: PropTypes.string.isRequired
}