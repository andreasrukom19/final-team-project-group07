import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../../redux/modal/modalSlice';
import { selectUserData } from '../../redux/selectors';

import { modalNames } from 'constants/constants';

import { ModalMyDailyNorma } from 'components';

import {
  MyDailyNorma,
  MyDailyNormaAmount,
  MyDailyNormaContainer,
  WaterNormaAmount,
  WaterNormaAmountEdit,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const dispatch = useDispatch();

  const { dailyNorma } = useSelector(selectUserData);
  const dailyNormaLiters = (dailyNorma / 1000).toFixed(1);

  return (
    <MyDailyNormaContainer>
      <MyDailyNorma>My daily norma</MyDailyNorma>
      <MyDailyNormaAmount>
        <WaterNormaAmount>{dailyNormaLiters} L</WaterNormaAmount>
        <WaterNormaAmountEdit
          type="button"
          onClick={() => dispatch(openModal(modalNames.DAILY_NORMA))}
        >
          Edit
        </WaterNormaAmountEdit>
      </MyDailyNormaAmount>
      <ModalMyDailyNorma />
    </MyDailyNormaContainer>
  );
};

export default DailyNorma;
