import MenuDisplay from './MenuDisplay';
import ActionButtons from './ActionButtons';

export default function MenuCard({ item, isShuffling, onRandomize, onFindNearby }) {
	return (
		<section className="mx-auto w-full max-w-sm rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-6">
			<MenuDisplay item={item} isShuffling={isShuffling} />
			<div className="mt-6">
				<ActionButtons
					item={item}
					isShuffling={isShuffling}
					onRandomize={onRandomize}
					onFindNearby={onFindNearby}
				/>
			</div>
		</section>
	);
}
