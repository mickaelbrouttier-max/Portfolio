import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(
	options: Partial<IntersectionObserverInit> = {
		threshold: 0.1,
		rootMargin: "0px",
	},
) {
	const [isVisible, setIsVisible] = useState(false);
	// biome-ignore lint/suspicious/noExplicitAny: generic ref for intersection observer
	const ref = useRef<any>(null);

	useEffect(() => {
		const currentRef = ref.current;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, options);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [options]);

	return [ref, isVisible] as const;
}
