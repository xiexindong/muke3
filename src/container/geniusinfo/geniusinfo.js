import React,{Component} from "react"
// import { List, InputItem, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';

import { createForm, formShape } from 'rc-form';

class Form extends React.Component {
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log("error",error);
            console.log("value",value);
        });
    }

    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <input {...getFieldProps('normal')}/>
                <input {...getFieldProps('required', {
                    onChange(){},  // have to write original onChange here if you need
                    rules: [{required: true}],
                })}/>
                {(errors = getFieldError('required')) ? errors.join(',') : null}
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default createForm()(Form);





