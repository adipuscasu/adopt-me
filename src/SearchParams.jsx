const SearchParams = () => {
    const location = "Seatle, WA";
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;