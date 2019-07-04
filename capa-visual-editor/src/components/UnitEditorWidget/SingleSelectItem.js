import * as React from 'react';

import styles from 'global/styles';

export class SingleSelectItem extends React.PureComponent {

    render() {
        const additionallyСlass = Number(this.props.id) === 2 ? styles.answersFeedback_open : '';
        const placeholderText = Number(this.props.id) === 2 ? 'Enter the correct answer' : 'Enter an incorrect answer';
        const checkboxValue = Number(this.props.id) === 2 ? true : false;


        return (
            <div key={this.props.id} className={styles.answersOption}>
                <div className={styles.answersRadio}>
                    <input name='answer' type='radio' id={`answer-radio${this.props.id}`} value={this.props.id}
                           defaultChecked={checkboxValue}/>
                    <label htmlFor={`answer-radio${this.props.id}`} className={styles.answersRadioLabel}>
                        {this.props.title}
                    </label>
                </div>
                <div className={styles.answersFieldWrapper}>
                    <div className={styles.answersFeedback + ' ' + additionallyСlass}>
                        <label className={styles.answersFeedbackTitle} htmlFor={`feedback-field${this.props.id}`}>
                            Specific feedback
                        </label>
                        <textarea rows={1} className={styles.answersFeedbackField} id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected'/>
                    </div>
                    <div className={styles.answersItemWrapper}>
                        <label className={styles.sr} htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className={styles.answersItem} id={`answer-single${this.props.id}`}
                                  placeholder={placeholderText}/>
                        <button className={styles.answersFeedbackBtn} type='button' aria-label='Show feedback block'/>
                    </div>
                    <button className={styles.answersRemoveBtn} type='button' aria-label='Remove answer item'/>
                </div>
            </div>
        );
    }
}