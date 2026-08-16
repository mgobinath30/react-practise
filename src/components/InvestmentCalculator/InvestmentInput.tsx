import Input from "./Input";

export default function InvestmentInput({
  onUpdate,
}: {
  onUpdate: (field: string, val: number) => void;
}) {
  const handleUpdate = (field: string, val: number) => {
    onUpdate(field, val);
  };

  return (
    <div className="investment-input">
      <section>
        <label htmlFor="initial">Initial Investment</label>
        <Input
          name="initial"
          type="number"
          onEnter={(val) => handleUpdate("initial", val)}
        />
      </section>
      <section>
        <label htmlFor="annual">Annual Investment</label>
        <Input
          name="annual"
          type="number"
          onEnter={(val) => handleUpdate("annual", val)}
        />
      </section>
      <section>
        <label htmlFor="interest">Interest</label>
        <Input
          name="interest"
          type="number"
          onEnter={(val) => handleUpdate("interest", val)}
        />
      </section>
      <section>
        <label htmlFor="duration">Duration</label>
        <Input
          name="duration"
          type="number"
          onEnter={(val) => handleUpdate("duration", val)}
        />
      </section>
    </div>
  );
}
