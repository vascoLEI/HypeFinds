import { useEffect, useMemo, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar.jsx';
import OutfitCard from '../components/OutfitCard.jsx';
import { useSEO } from '../hooks/useSEO.js';
import { getOutfits } from '../services/outfitsService.js';

const defaultFilters = {
  gender: 'all',
};

const labels = {
  men: 'Men',
  women: 'Women',
  male: 'Male',
  female: 'Female',
};

export default function Outfits() {
  const [outfits, setOutfits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  useSEO({
    title: 'Outfits | HypeFinds',
    description: 'Browse complete HypeFinds outfits and open each look to shop individual pieces.',
  });

  useEffect(() => {
    let isActive = true;

    async function loadOutfits(showLoading = false) {
      if (showLoading) {
        setIsLoading(true);
      }

      const result = await getOutfits();

      if (!isActive) {
        return;
      }

      setOutfits(result.outfits);
      setIsLoading(false);
    }

    loadOutfits(true);
    const refreshId = window.setInterval(() => loadOutfits(false), 30000);

    return () => {
      isActive = false;
      window.clearInterval(refreshId);
    };
  }, []);

  const filterGroups = useMemo(
    () =>
      [
        {
          id: 'gender',
          label: 'Gender',
          options: [
            { label: 'All', value: 'all' },
            ...[...new Set(outfits.map((outfit) => outfit.gender))].map((gender) => ({
              label: labels[gender.toLowerCase()] || gender,
              value: gender,
            })),
          ],
        },
      ].filter((group) => group.options.length > 1),
    [outfits],
  );

  const filteredOutfits = useMemo(
    () =>
      outfits.filter((outfit) => filters.gender === 'all' || outfit.gender === filters.gender),
    [filters.gender, outfits],
  );

  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="mb-8 grid gap-5 lg:grid-cols-[18rem_1fr] lg:items-end">
        <div className="lg:col-start-2">
          <p className="section-kicker mb-3">Complete outfits</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Tap an outfit, shop each piece.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cocoa">
            Each look opens with separate buttons for every piece and code.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:items-start">
        <FilterSidebar
          title="Outfit filters"
          groups={filterGroups}
          selectedFilters={filters}
          onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
          onClear={() => setFilters(defaultFilters)}
        />

        {isLoading ? (
          <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-8 text-center">
            <p className="text-xl font-black">Loading outfits...</p>
            <p className="mt-2 text-cocoa">Finding the latest looks.</p>
          </div>
        ) : null}

        {!isLoading && filteredOutfits.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        ) : null}

        {!isLoading && filteredOutfits.length === 0 ? (
          <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-8 text-center">
            <p className="text-xl font-black">No outfits available yet.</p>
            <p className="mt-2 text-cocoa">New looks will appear here soon.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
