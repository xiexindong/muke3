import React from "react"
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

@createForm()
class BasicInputExample extends React.Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        console.log(this.autoFocusInst.props.value)
        console.log(this.inputRef.props.value)
        // this.inputRef.props;
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <List renderHeader={() => 'Customize to focus'}>
                    <InputItem
                        {...getFieldProps('autofocus')}
                        clear
                        placeholder="auto focus"
                        ref={el => this.autoFocusInst = el}
                    >标题</InputItem>
                    <InputItem
                        {...getFieldProps('focus')}
                        clear
                        placeholder="click the button below to focus"
                        ref={el => this.inputRef = el}
                    >标题</InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.handleClick}
                        >
                            click to focus
                        </div>
                    </List.Item>
                </List>
            </div>
        );
    }
}

// const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExample