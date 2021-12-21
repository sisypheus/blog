import React, { ChangeEvent, useEffect, useState, useRef } from 'react'

const SearchBar = ({ filterPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [searchTerm]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const isInputFocused = searchInput.current === document.activeElement;

    if (event.key === 'Enter' && isInputFocused)
      filterPosts(searchTerm);
  }

  const searchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="flex p-10 items-center justify-center m-auto max-w-2xl">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <input ref={searchInput} value={searchTerm} onChange={(e) => searchChange(e)} className="w-full text-center p-2 text-lg outline-none transition-all delay-75 group" type="text" placeholder="Search blog posts"></input>
          <svg className="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
        </div>
      </form>
    </div >
  )
}

export default SearchBar
