
import * as React from 'react'


export interface Props {
  // txtVal: string, // 输入的文本
  // todoList: Array<string>, // todo list

}

export interface State {
  txtVal: string, // 输入的文本
  todoList: Array<string>, // todo list
}

export class Todo extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      txtVal: '',
      todoList: [],
    }
  }

  render() {
    console.log('this.state', this.state)
    let { todoList, txtVal } = this.state
    const listItem = todoList.map((todoItem: string) => <li>{todoItem}</li>)

    return (
      <div className="todo-list">
        <main className="todo-list__wrapper">
          <input type="text" onChange={this.handleChange} value={txtVal}/>
          <button className="add-btn" onClick={this.handleClick}>建立备忘录</button>
          <ul className="todo-items">
            {listItem}
          </ul>
        </main>
      </div>
    )          
  }
  // renderTodoItems(todoList: string[]): string[]{
  //   return todoList.map((todoItem: string) => <li>{todoItem}</li>)
  // }

  handleClick() {
    // this.props.todoList.push(this.props.txtVal)
    // this.setState([...this.state.todoList, ...this.state.txtVal])
  }
  handleChange() {
    // this.setState(this.props.txtVal)
  }
}