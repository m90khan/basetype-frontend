export const parallaxItem = (event) => {
  document.querySelectorAll('.parallax-item').forEach((shift: HTMLDivElement) => {
    const position: number = Number(shift.getAttribute('data-value'));
    console.log('pos', position);
    const x = (window.innerWidth - event.pageX * position) / 200;
    const y = (window.innerHeight - event.pageY * position) / 220;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};
