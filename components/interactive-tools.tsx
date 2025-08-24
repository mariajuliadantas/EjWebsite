"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  Search,
  TrendingUp,
  FileText,
  Globe,
  Zap,
  Shield,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"
import { useState } from "react"

// Digital Maturity Diagnostic Tool
function DigitalDiagnostic() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "Como você avalia a presença digital atual da sua empresa?",
      options: ["Inexistente", "Básica", "Intermediária", "Avançada", "Excelente"],
    },
    {
      question: "Qual o nível de automação dos seus processos internos?",
      options: ["Manual", "Parcialmente automatizado", "Bem automatizado", "Totalmente automatizado", "IA integrada"],
    },
    {
      question: "Como você coleta e analisa dados do seu negócio?",
      options: ["Não coletamos", "Planilhas básicas", "Ferramentas simples", "Analytics avançado", "BI completo"],
    },
    {
      question: "Qual o nível de experiência digital dos seus clientes?",
      options: ["Muito baixa", "Baixa", "Média", "Alta", "Excelente"],
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getMaturityScore = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0)
    return Math.round((total / (questions.length * 4)) * 100)
  }

  const getMaturityLevel = (score: number) => {
    if (score < 25)
      return { level: "Iniciante", color: "bg-red-500", description: "Há muito espaço para crescimento digital" }
    if (score < 50) return { level: "Básico", color: "bg-orange-500", description: "Fundação digital estabelecida" }
    if (score < 75) return { level: "Intermediário", color: "bg-yellow-500", description: "Boa maturidade digital" }
    return { level: "Avançado", color: "bg-green-500", description: "Excelente maturidade digital" }
  }

  const resetDiagnostic = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const handleDownloadReport = () => {
    alert(
      "Gerando relatório PDF... Em uma implementação real, isso geraria e baixaria um PDF personalizado com o diagnóstico completo.",
    )
  }

  if (showResults) {
    const score = getMaturityScore()
    const maturity = getMaturityLevel(score)

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Seu Diagnóstico Digital</h3>
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{score}%</span>
              </div>
            </div>
          </div>
          <Badge className={`${maturity.color} text-white text-lg px-4 py-2`}>{maturity.level}</Badge>
          <p className="text-muted-foreground mt-2">{maturity.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recomendações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Modernização da presença digital
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Automação de processos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Implementação de analytics
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  Consultoria estratégica
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  Planejamento de roadmap
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  Implementação gradual
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={resetDiagnostic} variant="outline">
            Refazer Diagnóstico
          </Button>
          <Button onClick={handleDownloadReport} className="bg-gradient-to-r from-primary to-secondary">
            <Download className="h-4 w-4 mr-2" />
            Baixar Relatório PDF
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Diagnóstico de Maturidade Digital</h3>
        <p className="text-muted-foreground">
          Pergunta {currentQuestion + 1} de {questions.length}
        </p>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mt-4" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto p-4 hover:border-primary hover:bg-primary/5 bg-transparent"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Project Cost Calculator
function CostCalculator() {
  const [projectType, setProjectType] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [timeline, setTimeline] = useState("")
  const [showEstimate, setShowEstimate] = useState(false)

  const projectTypes = [
    { id: "landing", name: "Landing Page", basePrice: 2500 },
    { id: "website", name: "Site Institucional", basePrice: 5000 },
    { id: "ecommerce", name: "E-commerce", basePrice: 12000 },
    { id: "webapp", name: "Aplicação Web", basePrice: 15000 },
    { id: "mobile", name: "App Mobile", basePrice: 20000 },
  ]

  const availableFeatures = [
    { id: "cms", name: "Sistema de Gerenciamento", price: 2000 },
    { id: "auth", name: "Sistema de Login", price: 1500 },
    { id: "payment", name: "Gateway de Pagamento", price: 3000 },
    { id: "api", name: "Integração com APIs", price: 2500 },
    { id: "analytics", name: "Analytics Avançado", price: 1000 },
    { id: "seo", name: "Otimização SEO", price: 1500 },
  ]

  const timelineMultipliers = [
    { id: "standard", name: "Padrão (8-12 semanas)", multiplier: 1 },
    { id: "fast", name: "Rápido (4-6 semanas)", multiplier: 1.3 },
    { id: "urgent", name: "Urgente (2-3 semanas)", multiplier: 1.6 },
  ]

  const toggleFeature = (featureId: string) => {
    setFeatures((prev) => (prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]))
  }

  const calculateEstimate = () => {
    const baseProject = projectTypes.find((p) => p.id === projectType)
    if (!baseProject) return 0

    const featuresPrice = features.reduce((total, featureId) => {
      const feature = availableFeatures.find((f) => f.id === featureId)
      return total + (feature?.price || 0)
    }, 0)

    const timelineMultiplier = timelineMultipliers.find((t) => t.id === timeline)?.multiplier || 1

    return Math.round((baseProject.basePrice + featuresPrice) * timelineMultiplier)
  }

  const handleRequestDetailedQuote = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setTimeout(() => {
      alert("Redirecionando para formulário de orçamento detalhado com as especificações selecionadas...")
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Calculadora de Estimativa</h3>
        <p className="text-muted-foreground">Obtenha uma estimativa personalizada para seu projeto</p>
      </div>

      <div className="grid gap-6">
        <div>
          <Label className="text-base font-semibold mb-3 block">Tipo de Projeto</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projectTypes.map((type) => (
              <Button
                key={type.id}
                variant={projectType === type.id ? "default" : "outline"}
                className="justify-between h-auto p-4"
                onClick={() => setProjectType(type.id)}
              >
                <span>{type.name}</span>
                <span className="text-sm">R$ {type.basePrice.toLocaleString()}</span>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-semibold mb-3 block">Funcionalidades Extras</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {availableFeatures.map((feature) => (
              <Button
                key={feature.id}
                variant={features.includes(feature.id) ? "default" : "outline"}
                className="justify-between h-auto p-4"
                onClick={() => toggleFeature(feature.id)}
              >
                <span>{feature.name}</span>
                <span className="text-sm">+R$ {feature.price.toLocaleString()}</span>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-semibold mb-3 block">Prazo de Entrega</Label>
          <div className="grid gap-3">
            {timelineMultipliers.map((time) => (
              <Button
                key={time.id}
                variant={timeline === time.id ? "default" : "outline"}
                className="justify-between h-auto p-4"
                onClick={() => setTimeline(time.id)}
              >
                <span>{time.name}</span>
                <span className="text-sm">
                  {time.multiplier > 1 ? `+${Math.round((time.multiplier - 1) * 100)}%` : "Sem taxa"}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {projectType && timeline && (
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Estimativa do Projeto</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R$ {calculateEstimate().toLocaleString()}</div>
              <p className="text-muted-foreground mb-4">Valor estimado para seu projeto</p>
              <Button onClick={handleRequestDetailedQuote} className="bg-gradient-to-r from-primary to-secondary">
                Solicitar Orçamento Detalhado
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

// Website Analyzer
function WebsiteAnalyzer() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const analyzeWebsite = async () => {
    if (!url) return

    setIsAnalyzing(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock results
    const mockResults = {
      performance: Math.floor(Math.random() * 40) + 60,
      seo: Math.floor(Math.random() * 30) + 70,
      accessibility: Math.floor(Math.random() * 35) + 65,
      bestPractices: Math.floor(Math.random() * 25) + 75,
      issues: [
        "Imagens não otimizadas detectadas",
        "Meta descriptions ausentes",
        "Tempo de carregamento pode ser melhorado",
        "Faltam alt texts em algumas imagens",
      ],
      recommendations: [
        "Otimizar imagens para web",
        "Implementar lazy loading",
        "Adicionar meta descriptions",
        "Melhorar estrutura de headings",
      ],
    }

    setResults(mockResults)
    setIsAnalyzing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const handleDownloadFullReport = () => {
    alert(
      "Gerando relatório completo de análise... Em uma implementação real, isso geraria um PDF detalhado com todas as métricas e recomendações.",
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Analisador de Sites</h3>
        <p className="text-muted-foreground">Analise a performance, SEO e acessibilidade do seu site</p>
      </div>

      <div className="flex gap-4">
        <Input
          placeholder="https://seusite.com.br"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={analyzeWebsite}
          disabled={!url || isAnalyzing}
          className="bg-gradient-to-r from-primary to-secondary"
        >
          {isAnalyzing ? (
            <>
              <Search className="h-4 w-4 mr-2 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Analisar
            </>
          )}
        </Button>
      </div>

      {isAnalyzing && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-pulse space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                <Search className="h-8 w-8 text-primary animate-spin" />
              </div>
              <h4 className="text-lg font-semibold">Analisando seu site...</h4>
              <p className="text-muted-foreground">Verificando performance, SEO e acessibilidade</p>
              <Progress value={66} className="w-full max-w-md mx-auto" />
            </div>
          </CardContent>
        </Card>
      )}

      {results && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Performance", score: results.performance, icon: Zap },
              { label: "SEO", score: results.seo, icon: TrendingUp },
              { label: "Acessibilidade", score: results.accessibility, icon: Shield },
              { label: "Boas Práticas", score: results.bestPractices, icon: CheckCircle },
            ].map((metric) => {
              const Icon = metric.icon
              return (
                <Card key={metric.label}>
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${getScoreColor(metric.score)}`} />
                    <div className={`text-2xl font-bold ${getScoreColor(metric.score)}`}>{metric.score}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Problemas Encontrados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.issues.map((issue: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button onClick={handleDownloadFullReport} className="bg-gradient-to-r from-primary to-secondary">
              <Download className="h-4 w-4 mr-2" />
              Baixar Relatório Completo
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// Tech Trends Radar
function TechTrends() {
  const trends = [
    {
      title: "IA Generativa revoluciona desenvolvimento",
      category: "Inteligência Artificial",
      impact: "Alto",
      date: "2024-01-15",
      description:
        "Ferramentas de IA estão transformando como desenvolvemos software, aumentando produtividade em 40%.",
    },
    {
      title: "Edge Computing ganha tração",
      category: "Infraestrutura",
      impact: "Médio",
      date: "2024-01-14",
      description: "Processamento na borda reduz latência e melhora experiência do usuário em aplicações críticas.",
    },
    {
      title: "WebAssembly expande possibilidades web",
      category: "Desenvolvimento Web",
      impact: "Alto",
      date: "2024-01-13",
      description: "WASM permite executar código de alta performance no navegador, abrindo novas possibilidades.",
    },
    {
      title: "Quantum Computing se aproxima da realidade",
      category: "Computação Quântica",
      impact: "Baixo",
      date: "2024-01-12",
      description: "Avanços em computação quântica prometem revolucionar criptografia e otimização.",
    },
    {
      title: "Sustentabilidade em TI ganha importância",
      category: "Green Tech",
      impact: "Médio",
      date: "2024-01-11",
      description: "Empresas investem em tecnologias verdes para reduzir pegada de carbono digital.",
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Alto":
        return "bg-red-500"
      case "Médio":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  const handleViewMoreTrends = () => {
    alert(
      "Navegando para página completa de tendências... Em uma implementação real, isso abriria uma página dedicada com análises detalhadas de tendências tecnológicas.",
    )
  }

  const handleViewTrendDetail = (trendTitle: string) => {
    alert(
      `Visualizando detalhes da tendência: ${trendTitle}. Em uma implementação real, isso abriria um artigo detalhado sobre a tendência.`,
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Radar de Tendências Tech</h3>
        <p className="text-muted-foreground">Acompanhe as últimas tendências em tecnologia e inovação</p>
      </div>

      <div className="space-y-4">
        {trends.map((trend, index) => (
          <Card key={index} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{trend.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{trend.category}</Badge>
                    <Badge className={`${getImpactColor(trend.impact)} text-white`}>Impacto {trend.impact}</Badge>
                    <span>{new Date(trend.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                </div>
                <Button onClick={() => handleViewTrendDetail(trend.title)} variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{trend.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={handleViewMoreTrends} variant="outline">
          <TrendingUp className="h-4 w-4 mr-2" />
          Ver Mais Tendências
        </Button>
      </div>
    </div>
  )
}

export function InteractiveTools() {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Ferramentas Interativas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            <span className="text-foreground">Ferramentas que</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-chart-4 bg-clip-text text-transparent">
              geram valor real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experimente nossas ferramentas gratuitas e descubra como podemos transformar seu negócio digital.
          </p>
        </div>

        <Tabs defaultValue="diagnostic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="diagnostic" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Diagnóstico</span>
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Calculadora</span>
            </TabsTrigger>
            <TabsTrigger value="analyzer" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Analisador</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Tendências</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostic">
            <DigitalDiagnostic />
          </TabsContent>

          <TabsContent value="calculator">
            <CostCalculator />
          </TabsContent>

          <TabsContent value="analyzer">
            <WebsiteAnalyzer />
          </TabsContent>

          <TabsContent value="trends">
            <TechTrends />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
