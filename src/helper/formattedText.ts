export const formattedText = (stopsNumber: number) => {
    const lastDigit = stopsNumber % 10;

    if (
        stopsNumber.toFixed().charAt(stopsNumber.toString().length - 2) === '1'
    ) {
        return stopsNumber + ' пересадок';
    } else {
        switch (lastDigit) {
            default: {
                return stopsNumber + ' пересадок';
            }
            case 1: {
                return stopsNumber + ' пересадка';
            }
            case 2:
            case 3:
            case 4: {
                return stopsNumber + ' пересадки';
            }
        }
    }
};
