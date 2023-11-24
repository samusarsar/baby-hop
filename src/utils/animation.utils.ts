export const staggerAnimation = (
	showClass: string,
	elems: NodeListOf<Element>,
	hiddenClass?: string,
	afterTransitionClass?: string
) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(showClass);
				hiddenClass &&
					setTimeout(() => {
						entry.target.classList.remove(hiddenClass);
						afterTransitionClass &&
							entry.target.classList.add(afterTransitionClass);
					}, 2000);
			}
		});
	});

	elems.forEach((el) => observer.observe(el));
};
