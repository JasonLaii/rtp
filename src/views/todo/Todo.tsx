
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

  constructor(props: Props) {
    super(props);
    this.state = {
      txtVal: '',
      todoList: [],
    }
  }

  render() {
    let { todoList, txtVal } = this.state
    const listItem = todoList.map((todoItem: string,index: number) => <li key={index}>{todoItem}</li>)

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
  // renderTodoItems(todoList: string[]): string[]{
  //   return todoList.map((todoItem: string) => <li>{todoItem}</li>)
  // }

  handleClick() {
    this.setState({
      // todoList: this.state.todoList.push(this.state.txtVal)
      todoList: [...this.state.todoList, this.state.txtVal],
      txtVal: ''
    })
  }
  // handleChange(e: React.SyntheticEvent) {
  handleChange(e: any) {
    this.setState({
      txtVal: e.target.value
    })
  }
}