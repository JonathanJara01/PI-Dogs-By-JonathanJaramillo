import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import style from './detailPage.module.css';
import { NavLink, useParams } from "react-router-dom";
import imageDetail from '../Images/superiorHome.gif';

const DetailPageDogs = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log("DetailPageDogs - ID:", id);
  const detail = useSelector((state) => state.detail);
  console.log("Detail data:", detail);
  
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style['DetailContainer']}>
      {detail.length > 0 && (
        <div className={style['detail']}>
          <h1>Detail: {detail[0].name}</h1>
          <h3>Id: {detail[0].id}</h3>
          <img src={detail[0].image} alt='Dog' />
          <h2>Name: {detail[0].name}</h2>
          {detail[0].height && <h3>Height: {detail[0].height.metric || detail[0].height}Cm</h3>}
          {detail[0].weight && <h3>Weight: {detail[0].weight.metric || detail[0].weight}Kg</h3>}
          <h3>Temperaments: {detail[0].temperaments}</h3>
          <NavLink to={'/home'} className={style['enlace4']}>Home</NavLink>
      </div>
      )}
      <div>
      <img src={imageDetail} alt="imageDetail" className={style['imageDetail']}/>
      </div>
    </div>
  );
}

export default DetailPageDogs;







/* 

Altura.
Peso.
Temperamentos.
Años de vida. */