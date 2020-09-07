import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import '../css/TodoList.css'

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(({index, key, style}) => {
        const todo = todos[index];

        return(
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    }, [onRemove, onToggle, todos]);

    return(
        /*<div className="TodoList">
            {todos.map(item => (
                <TodoListItem todo={item} key={item.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>*/
        <List
            className="TodoList"
            width='1000'
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    );
}

export default React.memo(TodoList);