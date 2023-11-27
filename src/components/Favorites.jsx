
import { useSelector } from 'react-redux';
import {FavoriteItem} from './index';
import { SelectFavorites } from '../app/slices/FavoritesSlice';


const Favorites = () => {
    const favorites = useSelector(SelectFavorites);



    
  return (
    <div className="w-full max-w-screen-xl mx-auto p-8">
      <h1 className="text-3xl sm:text-4xl font-bold my-8 sm:mb-16">WISH LIST</h1>

      <div className="flex flex-col gap-4">
        {favorites.length > 0 ?  favorites.map((item) => (
          <FavoriteItem key={item.id} item={item} />
        )) : <div className="flex justify-center items-center">
        <h3 className="text-lg font-semibold text-gray-500 mt-8 mb-4">Your wish list is empty :(</h3>
      </div> }
      </div>
    </div>
  );
};

export default Favorites;





