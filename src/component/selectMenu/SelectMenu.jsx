import React from 'react';
import Button from '../button/Button';
import { withRouter } from 'react-router-dom';
import './selectMenu.css';

const SelectMenu = ({ history, setIndex }) => {
    
    return (
        <div className="menu">
            <h1 className="menu_title">面接対策アプリ</h1>
            <Button onClickHandler={() => { history.push('main/') }}>ノーマル面接</Button>
            <Button>圧迫面接</Button>
            <div className="select_number">
                <p>質問の数</p>
                <select name="number" className="number_box" onChange={e => setIndex(e.target.value)}>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
}

export default withRouter(SelectMenu);