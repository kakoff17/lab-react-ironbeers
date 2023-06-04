import { useState} from "react";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_Level: attenuationLevel,
      contributed_by: contributedBy,
    };
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", handleSubmit)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
    console.log(newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div>
      <h1>Add a new beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Beer name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />

        <label>Tagline</label>
        <input
          value={tagline}
          type="text"
          name="tagline"
          placeholder="Beer tagline"
          onChange={(event) => {
            setTagline(event.target.value);
          }}
        />
<br />
        <label>Description</label>
        <input
          value={description}
          type="text"
          placeholder="Beer description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
<br />
        <label>First Brewed</label>
        <input
          value={firstBrewed}
          type="text"
          placeholder="Beer first brewed"
          onChange={(event) => {
            setFirstBrewed(event.target.value);
          }}
        />
<br />
        <label>Brewers Tips</label>
        <input
          value={brewersTips}
          type="text"
          placeholder="Beer tips"
          onChange={(event) => {
            setBrewersTips(event.target.value);
          }}
        />
<br />
        <label>Attenuation Level</label>
        <input
          value={attenuationLevel}
          type="number"
          placeholder="Beer attenuation level"
          onChange={(event) => {
            setAttenuationLevel(event.target.value);
          }}
        />
<br />
        <label>Contributed by</label>
        <input
          value={contributedBy}
          type="text"
          placeholder="Contributed by"
          onChange={(event) => {
            setContributedBy(event.target.value);
          }}
        />
<br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
