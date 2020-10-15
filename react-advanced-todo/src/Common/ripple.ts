    
import "Common/ripple.css"

export const Ripple = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    const elementToRipple = event.currentTarget
    const rippleCircle = document.createElement('span')
    const diameter = Math.max(elementToRipple.clientWidth, elementToRipple.clientHeight)
    const radius = diameter/2

    rippleCircle.style.width = rippleCircle.style.height = `${diameter}px`
    rippleCircle.style.left = `${event.clientX - (elementToRipple.offsetLeft + radius)}px`;
    rippleCircle.style.top = `${event.clientY - (elementToRipple.offsetTop + radius)}px`;
    rippleCircle.classList.add("ripple-animate");
    
    const rippleEls = document.getElementsByClassName("ripple-animate")[0]

    if (rippleEls) {
        rippleEls.remove()
    }

    elementToRipple.appendChild(rippleCircle)
}