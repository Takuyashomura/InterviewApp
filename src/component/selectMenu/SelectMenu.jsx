import React from 'react';
import Button from '../button/Button';
import { normalQuestion } from '../../Array/questionArray';
import './selectMenu.css';

const SelectMenu = ({history}) => {
    console.log(normalQuestion)
    return (
        <div class="menu">
            <h1 className="menu_title">面接対策アプリ</h1>
            <Button onClickHandler={ () => { history.push('Main/') } }>ノーマル面接</Button>
            <Button>圧迫面接</Button>
            <div className="select_number">
            <p>質問の数</p>
            <select name="number" className="number_box">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </div>
        </div>
    );
}

export default SelectMenu;