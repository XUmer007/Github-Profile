// Icons
import { Component } from 'react';
import { DragIcon, EditIcon } from './icons';

/*
  props:  {
    1. editable: bool (optional),
    2. dragable: bool (optional),
    3. breadcrumbs: Array <{ 
        type: 'link' | 'text',
        content: string,
        url: string (when type is link), 
        extension: string (optional)
      }>,
    4. description: string (opional),
    5. languages: Array < Object{name: string, circleColor} >
  } 
*/
export default class Card extends Component {
  constructor(props) {
    super(props);

    this.breadcrumbs = this.props.data.breadcrumbs;
    this.editable = this.props.data.editable;
    this.dragable = this.props.data.dragable;
    this.description = this.props.data.description;
    this.languages = this.props.data.languages;
    this.circleColor = this.props.data.circleColor || 'gray';
  }
  /*
   * This Function will generate the breadcrumbs for the Card
   *
   * @params: none
   * @return: listItems <JSX containing ul with list of content>
   */
  generateBreadCrumbs() {
    let listItems = this.breadcrumbs.map((val, index) => {
      // Security check
      if (!['text', 'link', 'semi-link'].includes(val.type)) return null;

      if (val.type === 'text') {
        return (
          <li key={index}>
            {val.content}.
            <span className='text-gray'>
              {val.extension ? val.extension : ''}
            </span>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <a className={val.type} href={val.url}>
              {val.content}
            </a>
          </li>
        );
      }
    });

    return <ul className='breadcrumb'>{listItems.map((val) => val)}</ul>;
  }
  /*
   * This method is used to render the action
   * buttons like drag and edit on card.
   *
   * @params: none
   * @return: link containing the Edit Icon or Drag Icon
   */
  renderActionButton() {
    if (this.editable) {
      // Editable
      return <EditIcon id='edit-icon' />;
    } else if (this.dragable) {
      // Dragable
      return <DragIcon id='drag-icon' />;
    }
  }
  /*
   * Render the description for repo cards.
   *
   * @params none
   *
   * @return this.description wrapped with <p> tag
   */
  renderDescription() {
    if (this.description) {
      return (
        <p className='line-height-2 text-gray text-sm mt-5 mr-20'>
          {this.description}
        </p>
      );
    }
  }
  /*
   * Render the child content that is nested
   * inside component's body.
   *
   * @params none
   *
   * @return this.description
   */
  renderChildContent() {
    if (this.props.children) {
      return <div className='content'>{this.props.children}</div>;
    }
  }
  renderLanguages() {
    if (this.languages && this.languages.length > 0) {
      const languages = this.languages.map((language, index) => {
        return (
          <div key={index} className='flex no-wrap align-center mt-20'>
            <i className={`mt-5 circle circle-${language.circleColor}`}></i>
            <span className='text-gray text-sm'>{language.name}</span>
          </div>
        );
      });

      return <div className='flex wrap jc-left gap-10'>{languages}</div>;
    }
  }
  /*
   * Default render method for the component.
   *
   * @params: none
   * @return: JSX of whole card.
   */
  render() {
    return (
      <div className={`card ${this.props.className}`}>
        <div className='card-head'>
          {/* Breadcrumb */}
          {this.generateBreadCrumbs()}
          {this.renderActionButton()}
        </div>
        {/* Description */}
        {this.renderDescription()}

        {/* Render Children */}
        {this.renderChildContent()}

        {/* Language used in the project */}
        {this.renderLanguages()}
      </div>
    );
  }
}
