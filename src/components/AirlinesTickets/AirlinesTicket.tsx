import React from 'react';
import { formatterDate } from '../../helper/formatterDate';
import Card from '../Card/Card';
import style from './AirlinesTickets.module.scss';
import { TTicket } from '../../types/tickets';
import AirplaneIcon from '../../assets/airplane.png';
import { formattedText } from '../../helper/formattedText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const EUR = 62;
const USD = 61;

const AirlinesTicket: React.FC<TTicket> = (props) => {
    const {
        origin,
        origin_name,
        destination,
        destination_name,
        departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        carrier,
        stops,
        price,
    } = props;

    const currency = useSelector((state: RootState) => state.currency);

    const convertPrice = (price: number) => {
        switch (currency) {
            case 'EUR':
                return <> {Math.round(price / EUR)}&euro; </>;
            case 'USD':
                return <> {Math.round(price / USD)}&#36; </>;
            case 'RUB':
                return <>{price}&#8381;</>;
        }
    };

    return (
        <Card className={style.cardWrapper}>
            <div className={style.buyTicket}>
                <div className={style.carrierName}>{carrier}</div>
                <button className={style.buyButton}>
                    Купить <br /> за {convertPrice(price)}
                </button>
            </div>
            <div className={style.flightInfo}>
                <div className={style.departureInfo}>
                    <div className={style.departureTime}>{departure_time}</div>
                    <div className={style.originName}>
                        {origin}, {origin_name}
                    </div>
                    <div className={style.departureDate}>
                        {formatterDate(departure_date)}
                    </div>
                </div>
                <div className={style.stops}>
                    {formattedText(stops)}
                    <br />
                    <img
                        className={style.airplaneIcon}
                        src={AirplaneIcon}
                        alt="airplane"
                    />
                </div>
                <div className={style.arrivalInfo}>
                    <div className={style.arrivalTime}>{arrival_time}</div>
                    <div className={style.destinationName}>
                        {destination}, {destination_name}
                    </div>
                    <div className={style.arrivalDate}>
                        {formatterDate(arrival_date)}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AirlinesTicket;
