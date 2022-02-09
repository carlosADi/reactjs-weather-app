import React from 'react';
import './search-bar.scss';

//this is a class component
class SearchBar extends React.Component{
    
    
      onInputChange(e){
          this.props.inputChange(e);
      }
      onFormSubmit(e){
          e.preventDefault();
          this.props.formsubmitted(e);
      }
      onHandleChange(e){
          this.props.handleChange(e);
      }
    
      

    /**
     * render function is triggered whenever updating the state using set State function 
     *<select id="units" name="units">
                        <option value="metric">Celsius</option>
                        <option value="imperial">Fahrenheit</option>
                    </select>
     */

    render(){
        const location = this.props.location;
        const selectValue = this.props.value;

        return (
            <div className="py-5 justify-center items-center  px-2">
                <form className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <svg className="absolute top-5 left-4 w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                            </path>
                                </svg>
                                <input required className="h-14 w-96 text-md left-2 pl-10 pr-20 z-0 focus:shadow focus:outline-none bg-white px-12 rounded-lg  hover:cursor-pointer" type="text" id="search" placeholder="City" value={location} onChange={e => this.onInputChange(e)}/>
                                <div className="absolute  right-2 bottom-2">
                                
                                    <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600" type="submit">
                                        <p className="text-sm font-bold ">Search</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative right-3 p-3">
                            <select id="units" name="units" className="h-14 text-md focus:shadow focus:outline-none text-black rounded-lg " value={selectValue} onChange={(e) => this.onHandleChange(e)}>
                                <option value="metric">Celsius</option>
                                <option value="imperial">Fahrenheit</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;