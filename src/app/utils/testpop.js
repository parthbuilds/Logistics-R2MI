const usePopupText = () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [popupText, setPopupText] = useState('');

    const handleMouseEnter = (text) => {
        setPopupText(text);
        setIsTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setIsTooltipVisible(false);
    };

    return {
        isTooltipVisible,
        popupText,
        handleMouseEnter,
        handleMouseLeave,
        setIsTooltipVisible, // Optionally expose setIsTooltipVisible
        setPopupText,       // Optionally expose setPopupText
    };
};