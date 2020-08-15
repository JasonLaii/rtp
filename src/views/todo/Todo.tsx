
import * as React from 'react'

export interface Props {
  // txtVal: string, // 输入的文本
  // todoList: Array<string>, // todo list

}

export interface State {
  txtVal: string, // 输入的文本
  // todoList: Array<string>, // todo list
  todoList: Array<string>, // todo list
}

export class Todo extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      txtVal: '',
      todoList: []
    }
  }

  componentDidMount () {}
  render () {
    const { todoList, txtVal } = this.state
    const listItem = this.renderTodoItems(todoList)

    return (
      <div className="todo-list">
        <main className="todo-list__wrapper">
          <input type="text" onChange={this.handleChange.bind(this)} value={txtVal}/>
          <button className="add-btn" onClick={this.handleClick.bind(this)}>建立备忘录</button>
          <ul className="todo-items">
            {listItem}
          </ul>
        </main>
      </div>
    )
  }

  // 渲染<li></li>节点
  renderTodoItems (todoList: string[]): React.ReactNode {
    return todoList.map((todoItem: string, index: number) => (
      <li key={index}>
        {todoItem}
        <button
          value="删除"
          type="button"
          onClick={this.handleDel.bind(this, index)}
        >
          删除
        </button>
      </li>
    ))
  }

  handleClick () {
    // setState 可能为异步更新，异步更新可接受一个函数
    /**
     * @param {object} state 上一个state
     * @param {object} props 更新被应用时的props
     */
    // this.setState((state, props) => {})
    this.setState({
      // todoList: this.state.todoList.push(this.state.txtVal)
      todoList: [...this.state.todoList, this.state.txtVal],
      txtVal: ''
    })
  }

  handleDel (index: number) {
    // debugger
    const todoList = this.state.todoList
    todoList.splice(index, 1)
    this.setState({
      todoList
    })
  }

  // handleChange(e: React.SyntheticEvent) {
  handleChange (e: any) {
    this.setState({
      txtVal: e.target.value
    })
  }
}
