import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onFiltersChange: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onFiltersChange: null,
}

function PostFiltersForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef();
    const { onFiltersChange } = props;

    function handleSearchTermChange(event) {
        event.preventDefault();
        const value = event.target.value;
        setSearchTerm(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formData = {
                searchTerm: value,
            }
            if (onFiltersChange) {
                onFiltersChange(formData);
            }
        }, 300);

    }
    return (
        <form>
            <input type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFiltersForm;