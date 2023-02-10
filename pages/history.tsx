import PageHeading from "../components/PageHeading";
import Subject from "../components/Subject";
//import Symbol from "../components/Symbol";
//import Link from 'next/link'
import Section from "../components/Section";
import Link from 'next/link'

export default function History() {
  return (
    <>
    <main className="flex flex-col gap-8 text-white">
      <PageHeading>Chapter 1</PageHeading>
      <Subject>Functions of History.</Subject>
      <Section>
            What is history?<br/>
            History is the record of human actions. It establishes the fact that men inspired by definite ideas made definite judgments of value, chose definite ends and resorted to definit means in order to attain the ends chosen.
      </Section>
      
      <Section>
      History Helps Us Understand People and Societies<br/>

In the first place, history offers a storehouse of information about how people and societies behave. Understanding the operations of people and societies is difficult, though a number of disciplines make the attempt. An exclusive reliance on current data would needlessly handicap our efforts. How can we evaluate war if the nation is at peace—unless we use historical materials? How can we understand genius, the influence of technological innovation, or the role that beliefs play in shaping family life, if we don't use what we know about experiences in the past? Some social scientists attempt to formulate laws or theories about human behavior. But even these recourses depend on historical information, except for in limited, often artificial cases in which experiments can be devised to determine how people act. Major aspects of a society's operation, like mass elections, missionary activities, or military alliances, cannot be set up as precise experiments. Consequently, history must serve, however imperfectly, as our laboratory, and data from the past must serve as our most vital evidence in the unavoidable quest to figure out why our complex species behaves as it does in societal settings. This, fundamentally, is why we cannot stay away from history: it offers the only extensive evidential base for the contemplation and analysis of how societies function, and people need to have some sense of how societies function simply to run their own lives.
      </Section>

      <Section>
      History Helps Us Understand Change and How the Society We Live in Came to Be <br/>

The second reason history is inescapable as a subject of serious study follows closely on the first. The past causes the present, and so the future. Any time we try to know why something happened—whether a shift in political party dominance in the American Congress, a major change in the teenage suicide rate, or a war in the Balkans or the Middle East—we have to look for factors that took shape earlier. Sometimes fairly recent history will suffice to explain a major development, but often we need to look further back to identify the causes of change. Only through studying history can we grasp how things change; only through history can we begin to comprehend the factors that cause change; and only through history can we understand what elements of an institution or a society persist despite change.
      </Section>

      <Section>
      History Contributes to Moral Understanding<br/>

History also provides a terrain for moral contemplation. Studying the stories of individuals and situations in the past allows a student of history to test his or her own moral sense, to hone it against some of the real complexities individuals have faced in difficult settings. People who have weathered adversity not just in some work of fiction, but in real, historical circumstances can provide inspiration. "History teaching by example" is one phrase that describes this use of a study of the past—a study not only of certifiable heroes, the great men and women of history who successfully worked through moral dilemmas, but also of more ordinary people who provide lessons in courage, diligence, or constructive protest.
      </Section>

      <Section>
      History Provides Identity<br/>

History also helps provide identity, and this is unquestionably one of the reasons all modern nations encourage its teaching in some form. Historical data include evidence about how families, groups, institutions and whole countries were formed and about how they have evolved while retaining cohesion. For many Americans, studying the history of one's own family is the most obvious use of history, for it provides facts about genealogy and (at a slightly more complex level) a basis for understanding how the family has interacted with larger historical change. Family identity is established and confirmed. Many institutions, businesses, communities, and social units, such as ethnic groups in the United States, use history for similar identity purposes. Merely defining the group in the present pales against the possibility of forming an identity based on a rich past. And of course nations use identity history as well—and sometimes abuse it. Histories that tell the national story, emphasizing distinctive features of the national experience, are meant to drive home an understanding of national values and a commitment to national loyalty.
      </Section>


      <Section>
      What Skills Does a Student of History Develop?<br/>
      </Section>
      <Section>
What does a well-trained student of history, schooled to work on past materials and on case studies in social change, learn how to do? The list is manageable, but it contains several overlapping categories.<br/>
      </Section>

      <Section>
The Ability to Assess Evidence :<br/> The study of history builds experience in dealing with and assessing various kinds of evidence—the sorts of evidence historians use in shaping the most accurate pictures of the past that they can. Learning how to interpret the statements of past political leaders—one kind of evidence—helps form the capacity to distinguish between the objective and the self-serving among statements made by present-day political leaders. Learning how to combine different kinds of evidence—public statements, private records, numerical data, visual materials—develops the ability to make coherent arguments based on a variety of data. This skill can also be applied to information encountered in everyday life.<br/>
      </Section>

      <Section>
The Ability to Assess Conflicting Interpretations:<br/> Learning history means gaining some skill in sorting through diverse, often conflicting interpretations. Understanding how societies work—the central goal of historical study—is inherently imprecise, and the same certainly holds true for understanding what is going on in the present day. Learning how to identify and evaluate conflicting interpretations is an essential citizenship skill for which history, as an often-contested laboratory of human experience, provides training. This is one area in which the full benefits of historical study sometimes clash with the narrower uses of the past to construct identity. Experience in examining past situations provides a constructively critical sense that can be applied to partisan claims about the glories of national or group identity. The study of history in no sense undermines loyalty or commitment, but it does teach the need for assessing arguments, and it provides opportunities to engage in debate and achieve perspective.<br/>
      </Section>

      <Section>
Experience in Assessing Past Examples of Change:<br/> Experience in assessing past examples of change is vital to understanding change in society today—it's an essential skill in what we are regularly told is our "ever-changing world." Analysis of change means developing some capacity for determining the magnitude and significance of change, for some changes are more fundamental than others. Comparing particular changes to relevant examples from the past helps students of history develop this capacity. The ability to identify the continuities that always accompany even the most dramatic changes also comes from studying history, as does the skill to determine probable causes of change. Learning history helps one figure out, for example, if one main factor—such as a technological innovation or some deliberate new policy—accounts for a change or whether, as is more commonly the case, a number of factors combine to generate the actual change that occurs.<br/>
</Section>

      <Section>
Historical study, in sum, is crucial to the promotion of that elusive creature, the well-informed citizen. It provides basic factual information about the background of our political institutions and about the values and problems that affect our social well-being. It also contributes to our capacity to use evidence, assess interpretations, and analyze change and continuities. No one can ever quite deal with the present as the historian deals with the past—we lack the perspective for this feat; but we can move in this direction by applying historical habits of mind, and we will function as better citizens in the process.
      </Section>
    </main> <br />

    

    <Link href="/historyQuiz">
      <button
          type="button"
          className="inline-flex items-center 	text-align: center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Evaluation 
        </button> 
        </Link>
    	</>
      
  );
}