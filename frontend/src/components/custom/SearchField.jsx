import { HiOutlineSearch } from "react-icons/hi";
import '@/styles/components/search-field.scss';
import '@/styles/components/custom-select.scss';
export default function SearchField({categories }) {
  return (
    <div className='search__filed d-flex column-gap-2 align-items-center bg_grey-2'>
        <div className='search__tags pe-2'>
            <select className="custom__select">
                {
                    categories.map(category => (
                        <option 
                            value={category.name}
                            key={category.name}>
                            {category.name}
                        </option>
                    ))
                }
            </select>
        </div>
        <div className='navbar__search'>
            <input type='search' placeholder="Search for items..."/>
        </div>
        <div className='search__icon c_wh d-flex bg_primary align-items-center justify-content-center'>
            <HiOutlineSearch />
        </div>
    </div>
  )
};