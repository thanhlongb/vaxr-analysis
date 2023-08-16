import { useState, useEffect } from "react"
import ListItem from "./ListItem"
import { Fork } from "../types"
import { getForks } from "../fetch"

export default function List() {
  const [forks, setForks] = useState<Fork[]>([])

  useEffect(() => {
    getForks().then((forks) => setForks(forks))
  }, [])

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200 max-h-[600px] overflow-scroll">
        {forks.map((fork) => (
          <ListItem key={fork.id} {...fork} />
        ))}
      </ul>
    </div>
  )
}
