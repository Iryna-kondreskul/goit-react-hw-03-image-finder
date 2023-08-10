import {Component} from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {

    static propTypes = {
        onSubmit:PropTypes.func.isRequired,
    };

    state = {
        query: '',
    };

    onChangeInput = e => {
        this.setState({query:e.currentTarget.value});
    };

    onSubmitForm = e => {
        e.preventDefault();

        const {onSubmit} = this.props;
        const {query} = this.state;

        if(query.trim()=== ''){
            query.error('Enter a search term.');
      return;
        }
        onSubmit(query);
    }

    render() {
   
        return (
            <header class={css.searchbar}>
      <form class={css.form} onSubmit={this.onSubmitForm}>
        <button 
        type="submit" 
        class={css.button}>
          <FaSearch size={12} />
          {/* <span class={css.button_label}>Search</span> */}
        </button>
    
        <input
          class={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={this.querty}
          onChange={this.onChangeInput}
        />
      </form>
    </header>
        )
 }
}

export default Searchbar;