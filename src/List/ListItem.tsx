import { Fork } from '../types'

export default function ListItem({
  id,
  name,
  description,
  html_url,
  owner,
  created_at,
  updated_at
}: Fork): React.ReactElement<Fork> {
  return (
    <li>
      <a href={html_url} className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate">{description ?? name}</p>
              </div>
              <div className="mt-2 flex">
                <div className="flex space-x-1 items-center overflow-hidden">
                    <img
                      key={owner.id}
                      className="inline-block h-4 w-4 rounded-full"
                      src={owner.avatar_url}
                      alt={owner.login}
                    />
                    <span className='text-sm text-gray-600'>{owner.login}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex flex-col items-end text-sm text-gray-500">
                <p>
                  last updated: <time dateTime={updated_at}>{updated_at}</time>
                </p>
                <p>
                  forked at: <time dateTime={created_at}>{created_at}</time>
                </p>
              </div>

            </div>
          </div>
        </div>
      </a>
    </li>
  )
}