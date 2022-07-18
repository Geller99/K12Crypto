import React, { useEffect } from 'react'

const defaultHeight = 362;
const defaultWidth = 620;
const defaultOverflow = 'hidden';
function ModalContainer({
    children,
    maxHeightAllocated = defaultHeight,
    maxWidthAllocated = defaultWidth,
    overflowX = defaultOverflow,
    closeFunction = () => { },
    show = false,
    outsideDismiss = false
}) {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [show])

    return (
        <div className={show ? "modal-container active" : "modal-container"} onClick={outsideDismiss ? closeFunction : () => { }}>
            <div
                className={show ? "card active" : "card inactive"}
                style={{ maxHeight: maxHeightAllocated + 'px', maxWidth: maxWidthAllocated + 'px', overflowX: overflowX }}
                onClick={e => e.stopPropagation()}
            >   
                {show && <div className="content">
                    {children}
                </div>}
                <button type='button' className="close-cross" onClick={closeFunction}>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.81573 7L11.4046 2.72207C11.4648 2.65098 11.4142 2.54297 11.3212 2.54297H10.2302C10.1659 2.54297 10.1044 2.57168 10.062 2.6209L7.10206 6.14961L4.1421 2.6209C4.10109 2.57168 4.03956 2.54297 3.97394 2.54297H2.88292C2.78995 2.54297 2.73937 2.65098 2.79952 2.72207L6.38839 7L2.79952 11.2779C2.78605 11.2938 2.7774 11.3132 2.77461 11.3338C2.77183 11.3544 2.77501 11.3754 2.78379 11.3942C2.79257 11.4131 2.80658 11.429 2.82415 11.4402C2.84172 11.4513 2.86212 11.4571 2.88292 11.457H3.97394C4.0382 11.457 4.09972 11.4283 4.1421 11.3791L7.10206 7.85039L10.062 11.3791C10.103 11.4283 10.1646 11.457 10.2302 11.457H11.3212C11.4142 11.457 11.4648 11.349 11.4046 11.2779L7.81573 7Z" fill="#ACACAC" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ModalContainer
