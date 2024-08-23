import React, { useState } from 'react';

interface Tag {
  tag: string;
}

interface Data {
  sn: number;
  links: string;
  Prefix: string;
  add: Tag[];
  selectTag: string[];
}

const Uploads = () => {
  const [DummyData, setDummyData] = useState<Data[]>([
    {
      sn: 1,
      links: "oshankhan07@gmail.com",
      Prefix: "Prefix sample",
      add: [{ tag: "Tag1" }, { tag: "Tag2" }, { tag: "Tag3" }, { tag: "Tag4" }, { tag: "Tag5" }],
      selectTag: []
    },
    {
      sn: 2,
      links: "oshankhan07@gmail.com",
      Prefix: "Prefix sample",
      add: [{ tag: "Tag1" }, { tag: "Tag2" }, { tag: "Tag3" }],
      selectTag: []
    },
    // Other Data...
  ]);

  const handleSelectTag = (index: number, tag: string) => {
    const newData = [...DummyData];
    if (!newData[index].selectTag.includes(tag)) {
      newData[index].selectTag.push(tag);
      setDummyData(newData);
    }
  };

  const handleRemoveTag = (index: number, tag: string) => {
    const newData = [...DummyData];
    newData[index].selectTag = newData[index].selectTag.filter(t => t !== tag);
    setDummyData(newData);
  };

  return (
    <div className='flex flex-col w-full px-10 '>

      <p className='text-2xl mb-8'>Uploads</p>
      <div className=' w-[90%] bg-green-400 overflow-x-auto rounded-md p-2'>
        <table className='w-full border-separate border-spacing-y-2 ' >
        <thead >
        <tr>
              <th className="py-2 px-4 text-left ">Sno.</th>
              <th className="py-2 px-4 text-left ">Links</th>
              <th className="py-2 px-4 text-left ">Prefix</th>
              <th className="py-2 px-4 text-left ">Add Tags</th>
              <th className="py-2 px-4 text-left ">Selected Tags</th>
            </tr>
        </thead>
        <tbody  >
          {DummyData.map((values, index) => (
            <tr key={values.sn} className='bg-yellow-300 m-10 rounded-md'>
               <td className="py-2 px-4 text-sm">{values.sn}</td>
                <td className="py-2 px-4 text-sm">{values.links}</td>
                <td className="py-2 px-4 text-sm">{values.Prefix}</td>
              <td>
                <div className="relative mr-4">
                  <select
                    className=" bg-[#0D0D0D] px-4 text-white text-sm w-36 h-8  rounded-lg"
                    onChange={(e) => handleSelectTag(index, e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Tag
                    </option>
                    {values.add.map((tag, idx) => (
                      <option key={idx} value={tag.tag}>
                        {tag.tag}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td>
                <div className="flex gap-2 mr-4">
                  {values.selectTag.map((tag, idx) => (
                    <p key={idx} className="bg-gray-800 text-white py-1 px-2 rounded-full flex items-center">
                      {tag}
                      <button
                        className="ml-2 text-white "
                        onClick={() => handleRemoveTag(index, tag)}
                      >
                        &times;
                      </button>
                    </p>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Uploads;
