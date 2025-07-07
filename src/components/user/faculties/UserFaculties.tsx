import { Link } from 'react-router';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function UserFaculties() {
    const fauclties = [
        {
            "faculty_code": "F012",
            "faculty_name": "Magistratura"
        },
        {
            "faculty_code": "F006",
            "faculty_name": "İnformasiya texnologiyaları  və telekommunikasiya "
        },
        {
            "faculty_code": "F002",
            "faculty_name": "Energetika"
        },
        {
            "faculty_code": "F005",
            "faculty_name": "Maşınqayırma və robototexnika"
        },
        {
            "faculty_code": "F004",
            "faculty_name": "Metallurgiya və kimya texnologiya"
        },
        {
            "faculty_code": "F009",
            "faculty_name": "Distant və qiyabi təhsil"
        },
        {
            "faculty_code": "F001",
            "faculty_name": "Nəqliyyat və logistika"
        },
        {
            "faculty_code": "F003",
            "faculty_name": "Xüsusi texnika və texnologiya"
        },
        {
            "faculty_code": "F008",
            "faculty_name": "Alman Mühəndisliyi"
        },
        {
            "faculty_code": "F010",
            "faculty_name": "Əcnəbi tələbələrlə iş şöbəsi"
        },
        {
            "faculty_code": "F007",
            "faculty_name": "İqtisadiyyat və idarəetmə"
        },
        {
            "faculty_code": "F000",
            "faculty_name": "Ümumi universitet kafedraları"
        },
        {
            "faculty_code": "F011",
            "faculty_name": "Sabah"
        },
        {
            "faculty_code": "F016",
            "faculty_name": "Beynəlxalq Biznes Məktəbi"
        },
        {
            "faculty_code": "F013",
            "faculty_name": "Müstəqil qruplar"
        }
    ]
  return (
    <section className='w-full flex justify-center items-center p-[50px]'>
        <div className='w-full flex justify-center items-center flex-wrap'>
            <div className='w-full flex flex-wrap'>
                {fauclties.map((faculty, index) => {
                    return (
                        <div key={index} className='w-1/2 p-2'>
                            <Link to={`/subjects/${faculty.faculty_code}`} className='block'>
                                <div className="flex justify-between items-center w-full h-full rounded-[10px] border border-gray-300 p-4 transition-colors duration-300 text-l hover:bg-[rgb(20,30,79)] hover:text-white cursor-pointer">
                                    <p>
                                        {faculty.faculty_name} ({faculty.faculty_code})
                                    </p>
                                    <ArrowOutwardIcon />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
