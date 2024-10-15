import { HiOutlineSearch } from "react-icons/hi";
import CustomSelect from "../ui/customSelect";
import '@/styles/components/search-field.scss';

export default function SearchField({categories =[]}) {
    const c = categories.map(category => category.name)
    console.log(c,"sadddddddddddd")
  return (
    <div className='search__filed d-flex align-items-center bg_grey-2'>
        <div className='search__tags'>
            <CustomSelect options={c} /> 
        </div>
        <div className='navbar__search'>
            <input type='search' />
        </div>
        <div className='search__icon c_wh d-flex bg_primary align-items-center justify-content-center'>
            <HiOutlineSearch />
        </div>
    </div>
  )
};