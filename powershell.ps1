# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "myResourceGroup"
$location = "eastus"
$storageAccountName = "myuniquestorageacct"

# Create Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2" `
                     -AccessTier "Hot"