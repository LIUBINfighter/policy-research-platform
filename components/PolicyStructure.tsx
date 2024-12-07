'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface PolicySection {
  id: string
  title: string
  content: string
  references?: string[]
  subsections?: {
    id: string
    title: string
    content: string
    references?: string[]
  }[]
}

export default function PolicyStructure() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const policySections: PolicySection[] = [
    {
      id: 'supervision',
      title: '（一）监管许可-综述',
      content: '',
      subsections: [
        {
          id: 'cross-border',
          title: '1. 数据跨境流动方面',
          content: '数据安全合规化、促进发展的数据跨境流动框架，进一步深化数据跨境流动合合作，规范全球数字经济发展...',
          references: ['《数据出境安全评估办法》第二章第七条']
        },
        {
          id: 'algorithm',
          title: '2. 算法与人工智能方面',
          content: '我国对算法和新科技发展前沿的把握，立足于产业发展的需求，通过监管引导不断深化各类算法服务需要求...',
          references: ['《互联网信息服务算法推荐管理规定（征求意见稿）》第九章第一条']
        },
        {
          id: 'market',
          title: '3. 数据要素市场建设方面',
          content: '国家数据局的成立标志着我国数据要素发展正式迈入新阶段，中央内外政策方案和规划加快正在加快推进我国数据经济发展...'
        }
      ]
    },
    {
      id: 'support',
      title: '（二）政策支持-综述',
      content: '目前，企业亟需更加确定的政策和指引，在可预期、合法、正当、必要的范围下实现数据的数据隐私自由化...',
      references: ['《商务大数据（中国、青岛）个人信息跨境流动先行先试集聚区》']
    },
    {
      id: 'civil',
      title: '（三）民事利益-综述',
      content: '侵害能力权益或造成产损失时，赔偿数额确定方式按照数据权人因侵害空间损失或者侵权人因此获得的利益进行确定...',
      references: ['《民法典》第二章第七十七条', '《网络安全法》第五章第一条']
    }
  ]

  // 如果组件还未挂载，返回基础结构
  if (!mounted) {
    return (
      <div className="space-y-6">
        {policySections.map((section) => (
          <section key={section.id} className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
            {section.content && (
              <div className="pl-4 text-gray-600">
                <p>{section.content}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {policySections.map((section) => (
        <section 
          key={section.id}
          className={`rounded-lg border p-4 transition-all ${
            activeSection === section.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => setActiveSection(section.id)}
        >
          <h3 className="mb-3 text-lg font-semibold hover:text-blue-600">
            {section.title}
          </h3>
          
          {section.content && (
            <div className="pl-4 text-gray-600">
              <p>{section.content}</p>
            </div>
          )}

          {section.subsections && (
            <div className="mt-4 space-y-4 pl-4">
              {section.subsections.map((subsection) => (
                <div key={subsection.id} className="border-l-2 border-gray-200 pl-4">
                  <h4 className="mb-2 font-medium text-gray-800">
                    {subsection.title}
                  </h4>
                  <p className="text-gray-600">{subsection.content}</p>
                  {subsection.references && (
                    <div className="mt-2">
                      {subsection.references.map((ref, index) => (
                        <Link 
                          key={index}
                          href="#"
                          className="mr-2 inline-block text-sm text-blue-600 hover:underline"
                        >
                          {ref}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {section.references && (
            <div className="mt-3 border-t pt-3">
              <div className="flex flex-wrap gap-2">
                {section.references.map((ref, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {ref}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  )
} 