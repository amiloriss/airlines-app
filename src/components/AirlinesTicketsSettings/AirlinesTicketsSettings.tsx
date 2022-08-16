import React, { useEffect, useState } from 'react';
import style from './AirlinesTicketsSettings.module.scss';
import { useDispatch } from 'react-redux';
import { sortAirlinesTickets } from '../../features/airlines/airlinesTicketsSlice';
import { changeCurrency } from '../../features/currency/currencySlice';
import Card from '../Card/Card';

const AirlinesTicketsSettings: React.FC = () => {
    const dispatch = useDispatch();
    const [stopsCount, setStopsCount] = useState<string[]>(['all']);
    const [currency, setCurrency] = useState<string>('RUB');
    const sortTickets = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setStopsCount((state) =>
                selectedValue === 'all'
                    ? [selectedValue]
                    : [
                          ...state.filter((stops) => stops !== 'all'),
                          selectedValue,
                      ],
            );
        } else {
            setStopsCount(() => [
                ...stopsCount.filter((stops) => stops !== selectedValue),
            ]);
        }
    };

    const changeCurrencyHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const selectedCurrency = event.target.value;
        const isChecked = event.target.checked;

        console.log(selectedCurrency);

        if (isChecked && selectedCurrency) {
            setCurrency(selectedCurrency);
        }
    };

    useEffect(() => {
        dispatch(sortAirlinesTickets(stopsCount));
    }, [stopsCount]);

    useEffect(() => {
        dispatch(changeCurrency(currency));
    }, [currency]);

    return (
        <Card className={style.card}>
            <div className={style.currencyWrapper}>
                <div>Валюта</div>
                <ul className={style.selectCurrency}>
                    {[
                        { idName: 'rub', value: 'RUB', label: 'RUB' },
                        { idName: 'usd', value: 'USD', label: 'USD' },
                        { idName: 'eur', value: 'EUR', label: 'EUR' },
                    ].map(({ idName, label, value }, idx) => {
                        return (
                            <li
                                key={idx}
                                className={`${style.radioCustomBtn} ${
                                    currency.includes(value) && style.checked
                                }`}
                            >
                                <label htmlFor={idName}>{label}</label>
                                <input
                                    checked={currency.includes(value)}
                                    value={value}
                                    onChange={(event) =>
                                        changeCurrencyHandler(event)
                                    }
                                    className={style.radioBtn}
                                    id={idName}
                                    name="currency"
                                    type="radio"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={style.stopsWrapper}>
                <div>Количество пересадок</div>
                <ul className={style.stopsSelectedList}>
                    {[
                        { idName: 'all', label: 'Все', value: 'all' },
                        {
                            idName: 'no-stops',
                            label: 'Без пересадок',
                            value: '0',
                        },
                        {
                            idName: 'one-stop',
                            label: '1 пересадка',
                            value: '1',
                        },
                        {
                            idName: 'two-stops',
                            label: '2 пересадки',
                            value: '2',
                        },
                        {
                            idName: 'three-stops',
                            label: '3 пересадки',
                            value: '3',
                        },
                    ].map(({ idName, label, value }, idx) => {
                        return (
                            <li key={idx}>
                                <input
                                    checked={stopsCount.includes(value)}
                                    value={value}
                                    onChange={(event) => sortTickets(event)}
                                    type="checkbox"
                                    id={idName}
                                />
                                <label htmlFor={idName}>{label}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Card>
    );
};

export default AirlinesTicketsSettings;
