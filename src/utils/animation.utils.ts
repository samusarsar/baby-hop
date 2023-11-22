export const staggerAnimation = (
	showClass: string,
	elems: NodeListOf<Element>
) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(showClass);
			}
		});
	});

	elems.forEach((el) => observer.observe(el));
};
