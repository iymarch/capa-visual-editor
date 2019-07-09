import React from 'react';
import Select from 'react-select';

import '../../assets/scss/app.scss';

export default class AnswerTypeSerting extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.state = {
            options: [
                { value: 'radio', label: 'Radio button' },
                { value: 'select', label: 'Select list' },
            ]
        }

    }

    componentDidMount() {
        this.setState({...this.props})
    }

    handleTypeChange(value) {
        this.setState({
            selectedTypeOption: value
        });
    }

    render() {
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">Answer type</div>
                <div className="advanced-settings-block-description">Choose the way in which the answers should be displated.</div>

                <div className="advanced-settings-form">
                    <label className="advanced-settings-label" htmlFor='sas1'>Answer type</label>
                    <Select
                        id='sas1'
                        className="advanced-settings-select"
                        isSearchable={false}
                        placeholder="- Select -"
                        value={this.state.selectedTypeOption}
                        onChange={this.handleTypeChange}
                        options={this.state.options}
                    />
                    <div className="advanced-settings-note">Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose</div>
                </div>
            </div>
        )
    }
}
