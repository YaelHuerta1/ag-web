"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Save, Upload, Globe, Mail, CreditCard, Palette, Search, Database } from "lucide-react"
import AdminLayout from "@/components/admin-layout"
import { useConfig } from "@/contexts/config-context"
import { CacheMonitor } from "@/components/cache-monitor"

export default function ConfiguracionPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { config, isLoading, error, updateConfig } = useConfig()
  const [activeTab, setActiveTab] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estados locales para los formularios
  const [generalConfig, setGeneralConfig] = useState(config.general)
  const [emailConfig, setEmailConfig] = useState(config.email)
  const [paymentConfig, setPaymentConfig] = useState(config.payment)
  const [appearanceConfig, setAppearanceConfig] = useState(config.appearance)
  const [seoConfig, setSeoConfig] = useState(config.seo)

  // Actualizar estados locales cuando se carga la configuración
  useEffect(() => {
    if (!isLoading) {
      setGeneralConfig(config.general)
      setEmailConfig(config.email)
      setPaymentConfig(config.payment)
      setAppearanceConfig(config.appearance)
      setSeoConfig(config.seo)
    }
  }, [config, isLoading])

  // Manejadores para actualizar los estados
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGeneralConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailSwitchChange = (checked: boolean) => {
    setEmailConfig((prev) => ({
      ...prev,
      enableEmailNotifications: checked,
    }))
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePaymentSwitchChange = (name: string, checked: boolean) => {
    setPaymentConfig((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleCurrencyChange = (value: string) => {
    setPaymentConfig((prev) => ({
      ...prev,
      currency: value,
    }))
  }

  const handleAppearanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAppearanceConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAppearanceSwitchChange = (name: string, checked: boolean) => {
    setAppearanceConfig((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleFontFamilyChange = (value: string) => {
    setAppearanceConfig((prev) => ({
      ...prev,
      fontFamily: value,
    }))
  }

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSeoConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSeoSwitchChange = (checked: boolean) => {
    setSeoConfig((prev) => ({
      ...prev,
      enableSitemap: checked,
    }))
  }

  // Envío del formulario
  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Actualizar cada sección de la configuración
      await updateConfig("general", generalConfig)
      await updateConfig("email", emailConfig)
      await updateConfig("payment", paymentConfig)
      await updateConfig("appearance", appearanceConfig)
      await updateConfig("seo", seoConfig)

      toast({
        title: "Configuración guardada",
        description: "Los cambios han sido aplicados correctamente",
      })
    } catch (err) {
      toast({
        title: "Error al guardar",
        description: "No se pudieron guardar los cambios. Intenta de nuevo.",
        variant: "destructive",
      })
      console.error("Error al guardar la configuración:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Mostrar carga mientras se obtiene la configuración
  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Cargando configuración...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  // Mostrar error si ocurre
  if (error) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <div className="text-red-500 mb-4">Error: {error}</div>
            <Button onClick={() => router.refresh()}>Intentar de nuevo</Button>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Configuración</h1>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="general">
              <Globe className="mr-2 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="email">
              <Mail className="mr-2 h-4 w-4" />
              Correo
            </TabsTrigger>
            <TabsTrigger value="payment">
              <CreditCard className="mr-2 h-4 w-4" />
              Pagos
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="mr-2 h-4 w-4" />
              Apariencia
            </TabsTrigger>
            <TabsTrigger value="seo">
              <Search className="mr-2 h-4 w-4" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="cache">
              <Database className="mr-2 h-4 w-4" />
              Caché
            </TabsTrigger>
          </TabsList>

          {/* Configuración General */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Configuración General</CardTitle>
                <CardDescription>Configura la información básica de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* El contenido existente permanece igual */}
                <div className="space-y-2">
                  <Label htmlFor="platformName">Nombre de la Plataforma</Label>
                  <Input
                    id="platformName"
                    name="platformName"
                    value={generalConfig.platformName}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platformDescription">Descripción de la Plataforma</Label>
                  <Textarea
                    id="platformDescription"
                    name="platformDescription"
                    value={generalConfig.platformDescription}
                    onChange={handleGeneralChange}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Correo de Contacto</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={generalConfig.contactEmail}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Teléfono de Contacto</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    value={generalConfig.contactPhone}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactAddress">Dirección</Label>
                  <Input
                    id="contactAddress"
                    name="contactAddress"
                    value={generalConfig.contactAddress}
                    onChange={handleGeneralChange}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuración de Correo */}
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Correo Electrónico</CardTitle>
                <CardDescription>Configura el servidor SMTP para enviar notificaciones por correo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enableEmailNotifications">Habilitar notificaciones por correo</Label>
                  <Switch
                    id="enableEmailNotifications"
                    checked={emailConfig.enableEmailNotifications}
                    onCheckedChange={handleEmailSwitchChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpServer">Servidor SMTP</Label>
                  <Input
                    id="smtpServer"
                    name="smtpServer"
                    value={emailConfig.smtpServer}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">Puerto SMTP</Label>
                  <Input
                    id="smtpPort"
                    name="smtpPort"
                    value={emailConfig.smtpPort}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">Usuario SMTP</Label>
                  <Input
                    id="smtpUsername"
                    name="smtpUsername"
                    value={emailConfig.smtpUsername}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">Contraseña SMTP</Label>
                  <Input
                    id="smtpPassword"
                    name="smtpPassword"
                    type="password"
                    value={emailConfig.smtpPassword}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderName">Nombre del Remitente</Label>
                  <Input
                    id="senderName"
                    name="senderName"
                    value={emailConfig.senderName}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderEmail">Correo del Remitente</Label>
                  <Input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    value={emailConfig.senderEmail}
                    onChange={handleEmailChange}
                    disabled={!emailConfig.enableEmailNotifications}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuración de Pagos */}
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Pagos</CardTitle>
                <CardDescription>Configura los métodos de pago y opciones relacionadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enablePayments">Habilitar pagos</Label>
                  <Switch
                    id="enablePayments"
                    checked={paymentConfig.enablePayments}
                    onCheckedChange={(checked) => handlePaymentSwitchChange("enablePayments", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="testMode">Modo de prueba</Label>
                  <Switch
                    id="testMode"
                    checked={paymentConfig.testMode}
                    onCheckedChange={(checked) => handlePaymentSwitchChange("testMode", checked)}
                    disabled={!paymentConfig.enablePayments}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moneda</Label>
                  <Select
                    value={paymentConfig.currency}
                    onValueChange={handleCurrencyChange}
                    disabled={!paymentConfig.enablePayments}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una moneda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MXN">Peso Mexicano (MXN)</SelectItem>
                      <SelectItem value="USD">Dólar Estadounidense (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tasa de Impuesto (%)</Label>
                  <Input
                    id="taxRate"
                    name="taxRate"
                    type="number"
                    value={paymentConfig.taxRate}
                    onChange={handlePaymentChange}
                    disabled={!paymentConfig.enablePayments}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Métodos de Pago Aceptados</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="creditCard"
                        checked={paymentConfig.paymentMethods.includes("creditCard")}
                        onChange={() => {}}
                        disabled={!paymentConfig.enablePayments}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="creditCard" className="font-normal">
                        Tarjeta de Crédito/Débito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="paypal"
                        checked={paymentConfig.paymentMethods.includes("paypal")}
                        onChange={() => {}}
                        disabled={!paymentConfig.enablePayments}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="paypal" className="font-normal">
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bankTransfer"
                        checked={paymentConfig.paymentMethods.includes("bankTransfer")}
                        onChange={() => {}}
                        disabled={!paymentConfig.enablePayments}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="bankTransfer" className="font-normal">
                        Transferencia Bancaria
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuración de Apariencia */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Apariencia</CardTitle>
                <CardDescription>Personaliza la apariencia de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Color Primario</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primaryColor"
                          name="primaryColor"
                          value={appearanceConfig.primaryColor}
                          onChange={handleAppearanceChange}
                        />
                        <div
                          className="h-10 w-10 rounded-md border"
                          style={{ backgroundColor: appearanceConfig.primaryColor }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryColor">Color Secundario</Label>
                      <div className="flex gap-2">
                        <Input
                          id="secondaryColor"
                          name="secondaryColor"
                          value={appearanceConfig.secondaryColor}
                          onChange={handleAppearanceChange}
                        />
                        <div
                          className="h-10 w-10 rounded-md border"
                          style={{ backgroundColor: appearanceConfig.secondaryColor }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fontFamily">Fuente Principal</Label>
                      <Select value={appearanceConfig.fontFamily} onValueChange={handleFontFamilyChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una fuente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter">Inter</SelectItem>
                          <SelectItem value="Roboto">Roboto</SelectItem>
                          <SelectItem value="Open Sans">Open Sans</SelectItem>
                          <SelectItem value="Montserrat">Montserrat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="logo">Logo de la Plataforma</Label>
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md border overflow-hidden">
                          <Image src="/logo.svg" alt="Logo" fill className="object-contain p-2" />
                        </div>
                        <Button variant="outline">
                          <Upload className="mr-2 h-4 w-4" />
                          Cambiar Logo
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <Label htmlFor="enableDarkMode">Habilitar Modo Oscuro</Label>
                      <Switch
                        id="enableDarkMode"
                        checked={appearanceConfig.enableDarkMode}
                        onCheckedChange={(checked) => handleAppearanceSwitchChange("enableDarkMode", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showTestimonials">Mostrar Testimonios</Label>
                      <Switch
                        id="showTestimonials"
                        checked={appearanceConfig.showTestimonials}
                        onCheckedChange={(checked) => handleAppearanceSwitchChange("showTestimonials", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showInstructors">Mostrar Instructores</Label>
                      <Switch
                        id="showInstructors"
                        checked={appearanceConfig.showInstructors}
                        onCheckedChange={(checked) => handleAppearanceSwitchChange("showInstructors", checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuración de SEO */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de SEO</CardTitle>
                <CardDescription>Optimiza tu plataforma para los motores de búsqueda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Título Meta (SEO)</Label>
                  <Input id="metaTitle" name="metaTitle" value={seoConfig.metaTitle} onChange={handleSeoChange} />
                  <p className="text-xs text-muted-foreground">
                    Recomendado: 50-60 caracteres. Actual: {seoConfig.metaTitle.length}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Descripción Meta (SEO)</Label>
                  <Textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={seoConfig.metaDescription}
                    onChange={handleSeoChange}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Recomendado: 150-160 caracteres. Actual: {seoConfig.metaDescription.length}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Palabras Clave (separadas por comas)</Label>
                  <Textarea
                    id="keywords"
                    name="keywords"
                    value={seoConfig.keywords}
                    onChange={handleSeoChange}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="googleAnalyticsId">ID de Google Analytics</Label>
                  <Input
                    id="googleAnalyticsId"
                    name="googleAnalyticsId"
                    value={seoConfig.googleAnalyticsId}
                    onChange={handleSeoChange}
                    placeholder="UA-XXXXXXXXX-X o G-XXXXXXXXXX"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="enableSitemap">Generar Sitemap Automáticamente</Label>
                  <Switch
                    id="enableSitemap"
                    checked={seoConfig.enableSitemap}
                    onCheckedChange={handleSeoSwitchChange}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nueva pestaña de Caché */}
          <TabsContent value="cache">
            <div className="grid grid-cols-1 gap-6">
              <CacheMonitor />

              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Caché</CardTitle>
                  <CardDescription>Ajusta la configuración del sistema de caché</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cacheTTL">Tiempo de vida de la caché (minutos)</Label>
                    <div className="flex gap-4">
                      <Input id="cacheTTL" type="number" defaultValue="15" min="1" max="1440" />
                      <Button variant="outline">Aplicar</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tiempo que permanecerán los datos en caché antes de ser actualizados
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="enableCache">Habilitar caché</Label>
                    <Switch id="enableCache" defaultChecked={true} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="enableClientCache">Habilitar caché en el cliente</Label>
                    <Switch id="enableClientCache" defaultChecked={true} />
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="destructive" className="w-full">
                      Limpiar Toda la Caché
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Esta acción eliminará todos los datos en caché y forzará nuevas consultas al servidor
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
