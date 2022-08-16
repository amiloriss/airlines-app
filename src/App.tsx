import React from 'react';
import style from './App.module.scss';
import { useSelector } from 'react-redux';
import AirlinesTicket from './components/AirlinesTickets/AirlinesTicket';
import { RootState } from './store/store';
import AirlinesTicketsSettings from './components/AirlinesTicketsSettings/AirlinesTicketsSettings';

const App = () => {
    const tickets = useSelector((state: RootState) => state.tickets.tickets);

    return (
        <div className={style.app}>
            <div className={style.container}>
                <AirlinesTicketsSettings />
                <div>
                    {tickets.length
                        ? tickets.map((ticket, idx) => {
                              return <AirlinesTicket key={idx} {...ticket} />;
                          })
                        : 'Не выбран ни один параметр'}
                </div>
            </div>
        </div>
    );
};

export default App;
