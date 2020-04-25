import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/index'

class TodoList extends Component {

    constructor(props){
        super(props)
        //console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)//订阅模式
    }
    
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input 
                        placeholder = {this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                        value = {this.state.inputValue}
                    />
                    <Button 
                    type="primary"
                    onClick={this.clickBtn}
                    >add</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                       <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                        />
                </div>
            </div>
         );
    }

    changeInputValue(e){
        //action是传参数 的对象
        const action = {
            type : 'changeInput',
            value : e.target.value
        }
        //给store传递action的值
        store.dispatch(action)
         
    }

    storeChange(){
        this.setState(store.getState())
    }

    clickBtn(){
        const action = {
            type:'addItem'
        }
        store.dispatch(action)
    }

    deleteItem(index){
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;